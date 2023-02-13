import {
  BestSellers,
  Categories,
  Container,
  DailyOffers,
  GeneralInfo,
} from "./styles";

export function SuperMarket() {
  return (
    <Container>
      <GeneralInfo></GeneralInfo>
      <DailyOffers></DailyOffers>
      <BestSellers></BestSellers>
      <Categories></Categories>
    </Container>
  );
}
