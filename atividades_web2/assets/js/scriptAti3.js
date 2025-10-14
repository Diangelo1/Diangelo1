// Exer3: 10 números (array)
const numeros = [2, 7, 8, 11, 4, 15, 17, 20, 3, 9];

// soma dos pares
const somaPares = numeros.filter(n => n % 2 === 0).reduce((s,n) => s + n, 0);

// função para checar primo
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;
  const r = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= r; i += 2) if (n % i === 0) return false;
  return true;
}

// soma dos primos
const somaPrimos = numeros.filter(isPrime).reduce((s,n) => s + n, 0);

console.log(`Soma dos pares: ${somaPares}`);
console.log(`Soma dos primos: ${somaPrimos}`);
