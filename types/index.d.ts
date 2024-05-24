export declare global {
  interface Answer {
    ans_id: number;
    answer_text: string;
    percentage: number;
    image: string;
  }

  interface Question {
    trait_id: number;
    question: string;
    description: string;
    category: string;
    weight: number;
    source: string;
    onboarding: boolean;
    answers: Answer[];
  }

  interface Sources {
    trait_id: number,
    source: string,
    category: string
  }
}
