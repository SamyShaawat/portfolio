import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const Block = styled.div<{ $w: string; $h: string }>`
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  border-radius: 12px;
  background: linear-gradient(90deg, #1b1a2e 25%, #2a2840 50%, #1b1a2e 75%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s linear infinite;
`;

const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

// Placeholder shown while a lazy section's chunk loads.
const SectionSkeleton = () => (
  <Wrap aria-busy="true" aria-label="Loading section">
    <Block $w="220px" $h="40px" />
    <Block $w="min(600px, 90%)" $h="18px" />
    <Grid>
      {[0, 1, 2].map((i) => (
        <Block key={i} $w="100%" $h="260px" />
      ))}
    </Grid>
  </Wrap>
);

export default SectionSkeleton;
