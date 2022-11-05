import PropTypes from 'prop-types';
import {SectionTitle, Title } from "./Title.styled";

export const Section = ({ title, children }) => {
    return (
        <SectionTitle>
            {title && <Title>{title}</Title>}
            {children}
        </SectionTitle>
    

    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};