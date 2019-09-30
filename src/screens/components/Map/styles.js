import styled, { css } from 'styled-components/native';
import { Platfrom } from 'react-native';
import { Platform } from '@unimodules/core';

export const LocationBox = styled.View`
    backgroung: #FFF;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.1;
    elevation: 1;
    border: 1px solid #ddd;
    border-radius: 3px;
    flex-direction: row;

    ${Platform.select({
        ios: css`
            margin-top: 20px;
        `,
        android: css`
            margin-top: 10px;
            margin-left: 10px;
        `,
    })}
`;

export const LocationText = styled.Text`
    margin: 8px 10px;
    font-size: 14px;
    color: #333;
`;

export const LocationTimeBox = styled.View`
    background: #222;
    padding: 3px 8px;
`;

export const LocationTimeText = styled.View`
    color: #fff;
    font-size: 12px;
    text-align: center;
`;

export const LocationTimeTextSmall = styled.View`
    color: #fff;
    font-size: 10px;
    text-align: center;
`;