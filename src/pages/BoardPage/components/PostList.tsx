import React from 'react';
import { PostListProps } from '../types';
import PostItem from './Post';
import styled from 'styled-components';

const BoardListStyled = styled.div`
    table {
        font-size: 13px;
        width: 100%;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-collapse: collapse;
        border-spacing: 0;

        @media (max-width: 768px) {
            font-size: 12px;
        }

        @media (max-width: 480px) {
            font-size: 11px;
        }

        a {
            color: #333;
            display: inline-block;
            line-height: 1.4;
            word-break: break-all;
            vertical-align: middle;

            &:hover {
                text-decoration: underline;
            }
        }

        th {
            text-align: center;
            padding: 14px 0;

            @media (max-width: 768px) {
                padding: 12px 0;
            }

            @media (max-width: 480px) {
                padding: 10px 0;
            }
        }

        .th-content {
            width: 150px;

            @media (max-width: 768px) {
                width: 120px;
            }

            @media (max-width: 480px) {
                width: 100px;
            }
        }

        .th-date {
            width: 150px;

            @media (max-width: 768px) {
                width: 120px;
            }

            @media (max-width: 480px) {
                width: 100px;
            }
        }

        tbody td {
            border-top: 1px solid #e7e7e7;
            text-align: center;
            height: 40px;

            @media (max-width: 768px) {
                height: 35px;
            }

            @media (max-width: 480px) {
                height: 30px;
            }
        }

        tbody th {
            padding-left: 28px;
            padding-right: 14px;
            border-top: 1px solid #e7e7e7;
            text-align: left;
            height: 40px;

            @media (max-width: 768px) {
                padding-left: 20px;
                padding-right: 10px;
                height: 35px;
            }

            @media (max-width: 480px) {
                padding-left: 15px;
                padding-right: 5px;
                height: 30px;
            }

            p {
                display: none;
            }
        }
    }
`;

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        width: 95%;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`;



const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <BoardListStyled id="board-list">
            <Container className="container">
                <table className="board-table">
                    <thead>
                        <tr>
                            <th scope="col" className="th-title">제목</th>
                            <th scope="col" className="th-content">작성자</th>
                            <th scope="col" className="th-content">좋아요 수</th>
                            <th scope="col" className="th-date">등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <PostItem key={index} post={post} />
                        ))}
                    </tbody>
                </table>
            </Container>
        </BoardListStyled>
    );
};

export default PostList;