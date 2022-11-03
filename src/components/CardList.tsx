import { Grid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  function handleViewImage(url: string): void {
    setSelectedImageUrl(url);
    onOpen();
  }

  return (
    <>
      <Grid templateColumns={['1fr', '1fr 1fr 1fr']} gap="10">
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={(url: string) => handleViewImage(url)}
          />
        ))}
      </Grid>

      <ModalViewImage
        isOpen={isOpen}
        imgUrl={selectedImageUrl}
        onClose={onClose}
      />
    </>
  );
}
