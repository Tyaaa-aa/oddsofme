export declare global {
  interface Answer {
    ans_id: number;
    answer_text: string;
    percentage: number;
  }

  interface Question {
    trait_id: number;
    question: string;
    description: string;
    category: string;
    weight: number;
    source: string;
    answers: Answer[];
  }
}
