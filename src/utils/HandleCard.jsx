import React from "react";
import Card from "../components/Card";
//!переименовать компонент
export const getInitialCard = [
  {
    id: 1,
    name: "Паприка",
    link: "https://thumbs.dreamstime.com/b/powdered-%D0%B2%D1%8B%D1%81%D1%83%D1%88%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B5%D0%B5%D1%86-%D0%B2-%D0%B1%D0%B5-%D0%BE%D0%BC-%D1%88%D0%B0%D1%80%D0%B5-%D0%BD%D0%B0-%D0%B1%D0%B5-%D0%BE%D0%B9-%D0%BF%D1%80%D0%B5-%D0%BF%D0%BE%D1%81%D1%8B-%D0%BA%D0%B5-54789287.jpg",
  },
  {
    id: 2,
    name: "Тимьян",
    link: "https://fruterria.ru/wp-content/uploads/2020/12/timian-s.jpg",
  },
  {
    id: 3,
    name: "Перец",
    link: "https://ae01.alicdn.com/kf/U5bc10c7e9d1c431ebc95f79babd6ed55A.jpg",
  },
  {
    id: 4,
    name: "Розмарин",
    link: "https://vsegda-pomnim.com/uploads/posts/2023-03/1678916872_vsegda-pomnim-com-p-rozmarin-kamen-foto-dragotsennii-63.jpg",
  },
  {
    id: 5,
    name: "Смесь ароматная",
    link: "https://rassvet-tk.ru/wp-content/uploads/2018/08/Smesj_prjanostei_i_spetsy_DELIKAT_Aromatnayasladkaya.jpg",
  },
  {
    id: 6,
    name: "Суповая смесь",
    link: "https://images.satu.kz/159499113_w640_h640_smes-pryanostej-i.jpg",
  },
];
function HandleCard() {
  return (
    <section className="cards">
      {getInitialCard.map((props) => (
        <Card key={props.id} props={props} />
      ))}
    </section>
  );
}
export default HandleCard;
