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
  label: string;
}

export interface StarRatingProps {
  rating: number
}