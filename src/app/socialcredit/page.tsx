import Styles from "@/app/layout.module.css";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  Key,
} from "react";

interface Credits {
  name: string;
  score: number;
}

export default async function SocialCredit() {
  const res = await fetch(`http://45.83.106.118:8080/socialcredit`, {cache: "no-store"});

  const data = await res.json();

  const { content } = await compileMDX<{ title: string }>({
    source: `
    ## 2023-11-20
    ### Kevin büntetése
    - Kevin nem tud olvasni,és hülyeségeket kérdezget
    - -1 pont

    ## 2023-11-20
    ### Laci büntetése
    - Laci azt mondta ma nem fog R6ozni és ne számítsunk rá de ő mégis R6ozni akart
    - -1 pont

    ## 2023-11-20
    ### Indulás
    - Elindult a leaderboard
    - Mindenki 0 ponttal kezd kivéve kristófot mert lefizetett
    - A szabályok hamarosan érkeznek
    `,
    options: { parseFrontmatter: true },
  });

  return (
    <>
      <div className={Styles.leaderboardContainer}>
        <table className={Styles.leaderboard}>
          <caption>R6 Social Credit Leaderboard</caption>

          <tbody>
            <tr>
              <th>Name</th>
              <th>Credit</th>
            </tr>
            {data
              ?.sort((a: any, b: any) => b.credit - a.credit)
              .map(
                (
                  item: {
                    name: string | null | undefined;
                    credit: string | null | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.credit}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
      {content}
    </>
  );
}
