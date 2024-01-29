import FyralathClient from "./content";

async function getFyralath() {
  const res = await fetch(`http://45.83.106.118:8080/getfyralath`, {cache: "no-store"});

  return res.json();
}

async function getLastRefresh() {
  const res = await fetch(`http://45.83.106.118:8080/getlastrefresh`, {cache: "no-store"});

  return res.json();
}

async function getTokenPrice(){
  const res = await fetch(`http://45.83.106.118:8080/gettokenprice`, {cache: "no-store"});

  return res.json();
}

export default async function Posts() {
  const data = await getFyralath();
  const lastrefresh = await getLastRefresh();
  const tokenprice = await getTokenPrice();

  return (
    <FyralathClient data={data} lastrefresh={lastrefresh} tokenprice={tokenprice}/>
  );
}
