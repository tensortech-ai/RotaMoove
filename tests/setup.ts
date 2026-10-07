import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// O cabecalho usa usePathname; nos testes ele responde a raiz.
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));
