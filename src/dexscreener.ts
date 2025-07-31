const fetchPools = async () => {
  const response = await fetch(
    "https://api.dexscreener.com/latest/dex/pairs/999/{pairId}",
    {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    }
  );

  const data = await response.json();

  return data;
};

async function main() {
  const data = await fetchPools();
  console.log(data);
}

main()
  .then(() => {
    console.log("Script completed");
  })
  .catch(console.error);
