import { useEffect, useState } from 'react';

import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

type QuestionType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

export function useRoom(roomId: string) {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [title, setTitle] = useState('');
  const [isAuthor, setIsAuthor] = useState(false);
  const [isLoader, setIsLoader] = useState(true);

  function organizeQuestions(question1: QuestionType, question2: QuestionType) {
    if (question2.isHighlighted && !question2.isAnswered) return 1;
    if (question1.isHighlighted && !question1.isAnswered) return -1;
    if (question2.isAnswered && !question1.isAnswered) return -1;
    if (question1.isAnswered && !question2.isAnswered) return 1;
    return 0;
  }

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([key, like]) => like.authorId === user?.id,
            )?.[0],
          };
        },
      );

      parsedQuestions.sort(organizeQuestions);

      setIsAuthor(databaseRoom.authorId === user?.id);
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
      setIsLoader(false);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return { questions, title, isAuthor, isLoader };
}
