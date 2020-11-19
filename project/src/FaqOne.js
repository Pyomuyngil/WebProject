import React from 'react'
import {Container, Header, Segment, Divider, Table} from 'semantic-ui-react'

const FaqOne = () => (
  <div>
  <Table attached style={{ marginTop: '7em' }}>
        <Table.Header>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br/>
            ligula eget dolor. Aenean masset. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
  </div>
)

export default FaqOne
