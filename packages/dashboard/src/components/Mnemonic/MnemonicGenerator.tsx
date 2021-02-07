import { experimentalStyled as styled } from '@material-ui/core'

const Container = styled('div')`
    display: inline-grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 24px 28px;
    & > * {
        min-width: 60px;
        min-height: 28px;
    }
`

const WordCard = styled('div')`
    border-radius: 6px;
    color: #1c68f3;
    font-size: 12px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export interface MnemonicGeneratorProps {
    dataSource: string[]
}

export function MnemonicGenerator(props: MnemonicGeneratorProps) {
    const { dataSource } = props
    return (
        <Container>
            {dataSource.map((item, index) => (
                <WordCard key={item}>{item}</WordCard>
            ))}
        </Container>
    )
}
