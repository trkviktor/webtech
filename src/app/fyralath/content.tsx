import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Styles from "./fyralath.module.css";

interface FyralathProps {
  lastrefresh: string;
}

interface TokenPriceProps {
  price: number;
}

function convertDateToString(number: number) {
  return number < 10 ? 0 + number.toString() : number.toString();
}

const FyralathClient = ({
  data,
  lastrefresh,
  tokenprice,
}: {
  data: [];
  lastrefresh: FyralathProps;
  tokenprice: TokenPriceProps;
}) => {
  const whTooltips = {
    colorLinks: true,
    iconizeLinks: true,
    renameLinks: true,
    iconSize: "small",
  };
  var sum = 0;
  var time = `${convertDateToString(
    new Date(lastrefresh.lastrefresh).getFullYear()
  )}-${convertDateToString(
    new Date(lastrefresh.lastrefresh).getMonth() + 1
  )}-${convertDateToString(
    new Date(lastrefresh.lastrefresh).getDate()
  )} ${convertDateToString(
    new Date(lastrefresh.lastrefresh).getHours()
  )}:${convertDateToString(
    new Date(lastrefresh.lastrefresh).getMinutes()
  )}:${convertDateToString(new Date(lastrefresh.lastrefresh).getSeconds())}`;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZoneSafe = timeZone?.toString() || "Unknown Time Zone";
  data.forEach((item: any) => {
    sum += (parseInt(item.gold) + parseInt(item.silver) / 100) * item.needed;
  });
  return (
    <>
      <Script src="https://wow.zamimg.com/js/tooltips.js" />
      <Script>{`whTooltips = ${JSON.stringify(whTooltips)}`}</Script>
      <table
        style={{ textAlign: "left" }}
        className={Styles.fyralathtable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Needed</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr key={"wowtoken"}>
            <td>
              <a href={`https://www.wowhead.com/item=122284`}>[WoW Token]</a>
            </td>
            <td>20€</td>
            <td>{(((1 / (tokenprice.price / 20)) * sum) / 20).toFixed(4)}</td>
            <td>
              <b>{((1 / (tokenprice.price / 20)) * sum).toFixed(2)}€</b>
            </td>
          </tr>
          <tr key={"fyralath"}>
            <td>
              <a href={`https://www.wowhead.com/item=206448`}>
                [Fyr'alath the Dreamrender]
              </a>
            </td>
            <td>
              {sum}
              <Image
                src="/gold.gif"
                alt="me"
                width="10"
                height="10"
              />
            </td>
            <td>1</td>
            <td>
              <b>
                {sum}
                <Image
                  src="/gold.gif"
                  alt="me"
                  width="10"
                  height="10"
                />
              </b>
            </td>
          </tr>
          {data.map((item: any) => (
            <tr key={item.name}>
              <td>
                <a href={`https://www.wowhead.com/item=${item.id}`}>
                  [{item.name} ]
                </a>
              </td>
              <td>
                {parseInt(item.gold) + parseInt(item.silver) / 100}
                <Image
                  src="/gold.gif"
                  alt="me"
                  width="10"
                  height="10"
                />
              </td>
              <td>{item.needed}</td>
              <td>
                {(
                  (parseInt(item.gold) + parseInt(item.silver) / 100) *
                  item.needed
                ).toFixed(2)}
                <Image
                  src="/gold.gif"
                  alt="me"
                  width="10"
                  height="10"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>updates hourly when blizzard api updates</p>
      <p>
        last updated: {time} {timeZoneSafe}
      </p>
    </>
  );
};

export default FyralathClient;
