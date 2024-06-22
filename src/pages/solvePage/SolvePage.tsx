import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Editor } from '@monaco-editor/react';
import { Solve } from '../IDEPage/types';
import dummySolves from './dummySolves.json';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    min-height: 100vh;
    background-color: #f0f0f0;
    padding-top: 100px;
`;

const SolveContainer = styled.div`
    width: 80%;
    background-color: #2d2d2d;
    border-radius: 8px;
    margin-bottom: 50px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    & p {
        color: #fff;
    }
`;

const SolveHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: #fff;
`;

const SolveTitle = styled.h2`
    font-size: 18px;
`;

const SolveList: React.FC = () => {
    const { questionId } = useParams<{ questionId?: string }>();
    const [solves, setSolves] = useState<Solve[]>([]);

    useEffect(() => {
        const fetchSolves = async () => {
            try {
                if (questionId) {
                    // 실제 API 호출 대신 더미 데이터를 사용합니다.
                    setSolves(dummySolves as Solve[]);
                    // api 호출
                    // const data = await getQuestionSolves(Number(questionId));
                    // setSolves(data);
                }
            } catch (error) {
                console.error('다른 사람의 풀이를 불러오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchSolves();
    }, [questionId]);

    return (
        <PageContainer>
            {solves.map((solve, index) => (
                <SolveContainer key={index}>
                    <SolveHeader>
                        <SolveTitle>{solve.memberSummaryDto.nick}의 풀이</SolveTitle>
                        
                    </SolveHeader>
                    <Editor
                        height="400px"
                        language={solve.language.toLowerCase()}
                        value={solve.code}
                        theme="vs-dark"
                        options={{
                            readOnly: true,
                            minimap: { enabled: false },
                        }}
                    />
                    <p>작성일: {new Date(solve.createdAt).toLocaleDateString()}</p>
                </SolveContainer>
            ))}
        </PageContainer>
    );
};

export default SolveList;