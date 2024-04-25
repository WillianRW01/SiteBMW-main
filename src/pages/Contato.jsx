import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';
import TimelineContatos from '../components/TimelineContatos';

export default function Contato() {
  return (
    <Card style={{ height: "150%", paddingTop: 100}}>
      <TimelineContatos />
    </Card>
  );
}
