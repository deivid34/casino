import { ButtonContainer } from './styles';
export const Button = ({ children, icon: Icon, iconSize = 24, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      {Icon && <Icon style={{ marginRight: '8px', fontSize: `${iconSize}px` }} />} 
      {children}
    </ButtonContainer>
  );
};
