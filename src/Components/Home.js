import React, { useState } from "react";

const Home = () => {
  const [monsters, setMonsters] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [skill, setSkill] = useState(1);
  const [skillCost, setSkillCost] = useState(3);
  const [gun, setGun] = useState(1);
  const [charm, setCharm] = useState(1);
  const [superP, setSuperP] = useState(gun * 1000);
  const [gauge, setGauge] = useState(0);

  const buyCharm = () => {
    setInterval(() => {
      setCurrency((currency) => currency + charm);
    }, 1000);
    setCharm(charm + 1);
    setCurrency(currency - skillCost);
  };

  const killingMonsters = () => {
    setMonsters(monsters + gun);
    getCurrency();
  };

  const getCurrency = () => {
    // if (
    //   (monsters % 5 === 0 && monsters !== 0) ||
    //   (monsters % 10 === 0 && monsters !== 0)
    // ) {
    // }
    setCurrency(currency + skill);
  };

  const buySkill = () => {
    setCurrency(currency - skillCost);
    setSkill(skill * 2);
    if (currency > skillCost * 2) {
      setSkillCost(skillCost * 2);
    }
    setGauge(gauge + 1);
  };

  const buyGun = () => {
    setCurrency(currency - skillCost);
    setGun(gun + 1);

    setSkillCost(skillCost * 2);

    setGauge(gauge + 1);
  };

  const useSuper = () => {
    setMonsters(monsters + superP);
    setGauge(0);
    setSuperP(gun * 1000);
  };

  return (
    <div className="App">
      <h1 className="kills">{`${monsters} Kills`}</h1>

      <p className="currency">{`${currency}$`}</p>
      <button className="button" onClick={killingMonsters}>
        Shoot the monsters
      </button>
      <br />
      {currency > skillCost && (
        <button className="button2" onClick={buyGun}>
          Buy a gun
        </button>
      )}
      {currency > skillCost && (
        <button className="button2" onClick={buySkill}>
          Double Currency Earnings
        </button>
      )}
      {currency > skillCost && (
        <button className="button2" onClick={buyCharm}>
          Buy a Charm
        </button>
      )}
      <div className="info">{`Gun level = ${gun}`}</div>
      <div className="info">{`Currency earning in each shot = ${skill}`}</div>
      <div className="info">{`Currency earning every second = ${charm}`}</div>
      {gauge >= 5 && (
        <button className="button3" onClick={useSuper}>
          SUPER CANNON!
        </button>
      )}
    </div>
  );
};

export default Home;
