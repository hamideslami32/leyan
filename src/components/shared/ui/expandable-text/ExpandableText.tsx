import { Box, Button } from '@chakra-ui/react';
import { memo, ReactNode, useState } from 'react';
import ChevronIcon from '@/assets/icons/chevron-down.svg';

interface ExpandableTextProps {
  noOfLines?: number;
  children: ReactNode;
}

const ExpandableText = memo(
  ({ noOfLines = 4, children }: ExpandableTextProps) => {
    const [expandedCount, setExpandedCount] = useState<undefined | number>(
      noOfLines,
    );

    const handleToggle = () =>
      setExpandedCount(expandedCount ? undefined : noOfLines);

    const moreButton = () => (
      <button className='flex items-center gap-2'></button>
    );

    return (
      <Box display='flex' flexDirection='column' gap={5}>
        <Box noOfLines={expandedCount}>
          <div className='relative'>
            {children}
            {expandedCount ? (
              <div className='absolute bottom-0 left-0 right-0 z-10 h-[75px] bg-gradient-to-t from-white/60 to-white/0'></div>
            ) : null}
          </div>
        </Box>
        <button
          type='button'
          className='flex items-center gap-2 text-sm text-blue-500'
          onClick={handleToggle}>
          <p>{expandedCount ? 'مشاهده بیشتر' : 'مشاهده کمتر'}</p>
          <div className={`${expandedCount ? 'rotate-0' : 'rotate-180'}`}>
            <ChevronIcon />
          </div>
        </button>
      </Box>
    );
  },
);

ExpandableText.displayName = 'ExpandableText';

export default ExpandableText;
