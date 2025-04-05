import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components'

const StyledSkeletonItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  overflow: hidden;
  user-select: none;
  border-bottom: 1px solid #eee;
`

const ImageSkeletonWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 1rem;
  line-height: 0;
`

const TextSkeletonWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  line-height: 1.35rem;
`

export const SkeletonItem = () => {
  return (
    <StyledSkeletonItem>
      <ImageSkeletonWrapper>
        <Skeleton circle={false} height={40} width={40} />
      </ImageSkeletonWrapper>

      <TextSkeletonWrapper>
        <Skeleton height={15} width="60%" />
        <Skeleton height={10} count={2} />
      </TextSkeletonWrapper>
    </StyledSkeletonItem>
  )
}
