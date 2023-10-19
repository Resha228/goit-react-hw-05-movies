import styled from 'styled-components';

export const FilmList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 26px;
    row-gap: 16px;
`;

export const FilmCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 166px;
    padding: 6px 6px 10px;
`;

export const FilmPoster = styled.img`
    margin-bottom: 14px;
    transition: 0.3s ease;

    &:hover {
        transform: scale(1.09);
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 1);
    }
`;

export const TitleFilm = styled.h2`
    font-size: 32px;
    font-weight: 700;
    margin: 8px 0 12px;
    
`;

export const MainContainer = styled.main`
    position: relative;
`;

export const IconContainer = styled.span`
    position: absolute;
    top: 10px;
    right: 0;
`;

export const DetailsWrapper = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 26px;
    row-gap: 16px;
`;
