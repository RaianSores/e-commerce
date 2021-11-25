import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import P from 'prop-types';

export const ProductCard = ({ title, description, image, id}) => {
    return (
        <div className={styles.productCard}>
            <Image
                src={image}
                alt="Logo"
                width={60}
                height={60}
            />
            <div>
                <h2>
                    {title} {id}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    title: P.string.isRequired,
    price: P.string.isRequired,
    description: P.string.isRequired,
    category: P.string.isRequired,
    image: P.string.isRequired,
    rating: P.string.isRequired,
    id: P.number.isRequired,
};