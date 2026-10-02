import { getModel } from "../config/llmModel.js";

export const router = async (state) => {
  const llm = getModel("router");
  const prompt = `You are an agent router.

    Available agents:

    - chat
    - search
    - coding
    - pdf
    - ppt
    - image

    Rules:

    chat:
    General conversation,
    explanation,
    learning,
    questions.

    search:
    current events,
    latest imformation,
    news,
    recent developments,
    internet lookup.

    coding:
    General code,
    debug code,
    build projects,
    architecture,
    API design.

    pdf:
    Question about geberate PDFs
    or document context.

    ppt:
    Question about geberate ppts
    or ppt context.

    genImage:
    Generate image,
    create image

    Return only one word:
    chat
    search
    coding
    pdf
    ppt
    genImage

    USer Query:
    ${state.prompt}`;

  const response = (await llm).invoke(prompt);

  return {
    ...state,
    agent: response.content.trim().toLowerCase(),
  };
};
