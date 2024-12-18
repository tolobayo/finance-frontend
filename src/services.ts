const URL = "http://localhost:8080/api/v1";

export async function getBudgets() {
  const res = await fetch(`${URL}/budget/1`);
  const data = await res.json();
  console.log(data);

  const updatedObject = Object.entries(data[0].catagoryLimits).reduce(
    (acc: { [key: string]: any }, [key, value]) => {
      const match = key.match(/, name=([^\]]+)\]/g);

      if (match) {
        const substring = match[0].replace(", name=", "").replace("]", ""); // The captured group
        acc[substring] = value;
      } else {
        console.log("No match found");
      }

      return acc;
    },
    {}
  );

  data[0].catagoryLimits = updatedObject;

  return data;
}
