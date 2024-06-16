import React, { useState } from 'react';
import {
    Container,
    Form,
    Title,
    Label,
    Input,
    SubmitButton,
    LinksContainer,
    Link
} from '../../components/PageStyle';

function LoginPage() {
    const [UserId, setUserId] = useState("");
    const [Password, setPassword] = useState("");

    const onUserIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.currentTarget.value);
    }

    const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 로그인 로직 처리
    }

    return (
        <Container>
            <Form onSubmit={onSubmitHandler}>
                <Title>로그인</Title>
                <Label>아이디</Label>
                <Input
                    type='text'
                    value={UserId}
                    onChange={onUserIdHandler}
                />
                <Label>비밀번호</Label>
                <Input
                    type='password'
                    value={Password}
                    onChange={onPasswordHandler}
                />
                <SubmitButton type='submit'>로그인</SubmitButton>
                <LinksContainer>
                    <Link href="/findId">아이디 찾기</Link>
                    <Link href="/findPw">비밀번호 찾기</Link>
                    <Link href="/join">회원가입</Link>
                </LinksContainer>
            </Form>
        </Container>
    );
}

export default LoginPage;


