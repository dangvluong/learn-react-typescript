import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log('Hi there!');
      }}
    ></ChildAsFC>
  );
};
export default Parent;
