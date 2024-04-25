"use client"
import { PrismaClient } from '@prisma/client';
import { useEffect } from 'react';

const prisma = new PrismaClient();

export function usePrisma() {
  useEffect(() => {
    prisma.$connect();
    return () => {
      prisma.$disconnect();
    };
  }, []);

  return prisma;
}
