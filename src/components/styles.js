import styled from "styled-components";
import {
 Box,
 Button,
 FormField,
 Grid,
 Heading,
 Paragraph,
 Text,
 TextArea,
 TextInput,
} from 'grommet';

/*


  Box
    id={id}
    basis="xxsmall"
    margin="small"
    pad="medium"
    round="small"
    background="light-4"

*/

const connection = (fromTarget, toTarget, { color, ...rest } = {}) => ({
  fromTarget,
  toTarget,
  color: color || 'graph-0',
  thickness: 'xsmall',
  round: true,
  type: 'rectilinear',
  ...rest,
});

const Components = () => {
  const [textInput, setTextInput] = useState('');


  return (
    // <Box fill pad="medium" overflow="auto">
      <Grid columns="small" gap="medium">
        {/* <Box key="type" align="start" gap="small"> */}
          <Heading margin={{ top: 'none' }}>Heading</Heading>
          <Paragraph>Paragraph</Paragraph>
          <Text>Text</Text>
          <Button label="Button" onClick={() => {}} />
        {/* </Box> */}
        {/* <Box key="input" gap="small"> */}
          <TextInput
            placeholder="TextInput"
            suggestions={['a', 'b', 'c']}
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
            onSelect={({ suggestion }) => setTextInput(suggestion)}
          />
          <TextArea placeholder="TextArea" />
          <FormField label="FormField">
            <TextInput placeholder="TextInput" />
          </FormField>
        {/* // </Box> */}
      </Grid>
    // </Box>
  );
};