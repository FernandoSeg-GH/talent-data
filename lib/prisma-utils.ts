import { PrismaClient, QuestionCategory, UserRole } from '@prisma/client';

export const prisma = new PrismaClient();

// GET /api/questions: Fetch all questions
export async function getAllQuestions() {
  return await prisma.question.findMany();
}

// POST /api/answers: Submit user answers
export async function createUserAnswer(data: {
  userId: number;
  questionId: number;
  frequency: number;
}) {
  return await prisma.userAnswer.create({ data });
}

// GET /api/results/:userId: Fetch results for a specific user
export async function getUserResults(userId: number) {
  return await prisma.userAnswer.findMany({
    where: { userId },
    include: { question: true },
  });
}

// Check if the user is an admin
export async function isAdmin(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return user && [UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.PRO_ADMIN, UserRole.USER].includes(user.role);
}

// Admin CRUD operations for Questions
export async function createQuestion(data: { text: string; category: QuestionCategory }) {
  return await prisma.question.create({ data });
}

export async function updateQuestion(id: number, data: { text: string; category: QuestionCategory }) {
  return await prisma.question.update({
    where: { id },
    data,
  });
}

export async function deleteQuestion(id: number) {
  return await prisma.question.delete({
    where: { id },
  });
}

// export async function getLeaderboard() {
//   const leaderboard = await prisma.userAnswer.groupBy({
//     by: ['userId'],
//     _sum: {
//       points: true,
//     },
//     orderBy: {
//       _sum: {
//         points: 'desc',
//       },
//     },
//     take: 10, // Limit to the top 10 users
//     include: {
//       user: true, // Include the user details
//     },
//   });

//   return leaderboard;
// }

// getLeaderboard().then((leaderboard) => {
//   console.log("Leaderboard:", leaderboard);
// });