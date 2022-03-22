export function greet(name) {
  if (name === 'Thomas' || (name === 'Martin') | (name === 'Stefan')) {
    return 'Hello Coach!';
  } else if (name !== 'Thomas' || (name !== 'Martin') | (name !== 'Stefan')) {
    return `Hello ${name}`;
  } else if (name === '') {
    return 'Hello stranger!';
  }
}
