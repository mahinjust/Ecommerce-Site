import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title><b>CREATE AN ACCOUNT</b></Title>
        <Form>
          <Input placeholder="NAME" />
          <Input placeholder="LAST NAME" />
          <Input placeholder="USERNAME" />
          <Input placeholder="EMAIL" />
          <Input placeholder="PASSWORD" />
          <Input placeholder="CONFIRM PASSEORD" />
          <Agreement>
            <b>By creating an account, I consent to the processing of my personal
            data in accordance with the</b><b>PRIVACY POLICY</b>
          </Agreement>
          <Link to={'/login'}>
            <Button>CREATE</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;