import React, { ReactElement, ReactNode } from "react";

export interface BannerComponentProps {
  backgroundImage: string;
  logo?: string;
  title: string;
  buttonText?: string;
  buttonIcon?: React.ReactElement;
  description: string;
  onClick: () => void;
}

export interface CustomButtonProps {
  icon?: React.ReactElement;
  onClick: () => void;
  text: string;
}

export interface SocialButtonProps {
  icon?: React.ReactElement;
  onClick: () => void;
  text: string;
}

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: "tel" | "password" | "text" | "email";
  label: string | ReactElement;
}

export interface StarRatingProps {
  rating: number | any;
}

export interface ModalComponentProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}
