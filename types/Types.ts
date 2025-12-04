import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ButtonProps{
    label: string;
    type: 'button' | 'submit' | 'reset';
    destination: string;
}

export interface BadgeProps{
    label: string;
}

export interface CardProps{
    icon: IconDefinition;
    title: string;
    content: string;
}

export interface ProcessCardProps{
    title: string;
    steps: string[];
}