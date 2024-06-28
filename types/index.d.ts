export declare global {
  type Answer = {
    ans_id: number;
    answer_text: string;
    image: string;
  }

  type Question = {
    trait_id: number;
    question: string;
    description: string;
    category: string;
    source: string;
    onboarding: boolean;
    answers: Answer[];
  }

  type Sources = {
    trait_id: number,
    source: string,
    category: string
  }

  type SelectedAnswer = {
    questionId: number
    answerId: number 
  }

  type SkippedQuestion = number[]
}
