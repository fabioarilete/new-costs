export const getMaterials = async () => {
  const response = await fetch(`http://localhost:5000/materialsList`);
  const data = await response.json();
  return data;
};
