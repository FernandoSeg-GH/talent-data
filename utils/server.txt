// Import dependencies
import { PrismaClient } from '@prisma/client';
import express, { Response, NextFunction } from 'express';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import ExtendedRequest from './types/extendedRequest'; // Import the ExtendedRequest type

// Initialize Prisma, Express and middleware
const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Register managers/directors/company owners
app.post('/register', async (req, res) => {
  const { email, password, role } = req.body;

  // Hash password
  const hashedPassword = await hash(password, 10);

  // Save user to the database
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
    },
  });

  // Return the new user
  res.json(newUser);
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user in the database
  const user = await prisma.user.findUnique({ where: { email } });

  // Check if user exists and password is correct
  if (user && (await compare(password, user.password))) {
    // Sign a JWT and return it
    const token = sign({ userId: user.id, role: user.role }, 'your-secret-key');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

// Middleware to authenticate users
const authenticate = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user as { role: string; userId: number };
    next();
  });
};

// Route to prepare the test (restricted to authorized users)
app.post('/prepare-test', authenticate, async (req: ExtendedRequest, res) => {
  if (req.user?.role !== 'manager' && req.user?.role !== 'director') {
    return res.status(403).json({ error: 'Access denied' });
  }

  // Prepare the test and save it to the database
  const newTest = await prisma.test.create({ data: req.body });
  res.json(newTest);
});

// Route to get test results (restricted to authorized users)
app.get('/test-results', authenticate, async (req: ExtendedRequest, res) => {
  if (req.user?.role !== 'manager' && req.user?.role !== 'director') {
    return res.status(403).json({ error: 'Access denied' });
  }

  // Get test results from the database
  const testResults = await prisma.testResult.findMany({ where: { testId: req.body.testId } });
  res.json(testResults);
});

// Start the server
app.listen(3000, () => console.log('Server is running on port 3000'));
