import React from 'react';

const Logo = () => {

    const LogoUrl = 'https://cdn.prod.website-files.com/5f64854a08f25a50068763b1/5f64d7f9ca1b3e4044c34690_supadu-logo-turq-nostrap';

    const imageSizes = [
        {suffix: '-p-500.png', width: 500},
        {suffix: '-p-800.png', width: 800},
        {suffix: '-p-1080.png', width: 1080},
        {suffix: '.avif', width: 2334},
    ];

    return (
        <a href="#" className="header__logo-link">
            <img
                src={`${LogoUrl}.avif`}
                loading="lazy"
                title="Supadu – No1 in publisher website solutions"
                alt="Supadu – specialized web products services for Trade Publishers and University Presses"
                sizes="(max-width: 479px) 140px, 180px"
                srcSet={imageSizes.map(({suffix, width}) => `${LogoUrl}${suffix} ${width}w`).join(', ')}
                className="image-25"/>
        </a>
    );
};

export default Logo;
