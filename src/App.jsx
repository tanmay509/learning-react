import { Card } from './components/Card';

export function App() {
  return (
    <div style={{display: 'flex', gap: '20px', justifyContent: 'center',  height: '100vh'}}>
      <Card name="Tanmay" im="https://avatars.githubusercontent.com/u/311799795?v=4&size=64" role="Web dev" des="Hi My name is Tanmay"/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}