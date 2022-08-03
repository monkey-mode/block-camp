import {
  Card, Container, Grid, Input, Row, Button, Text, Textarea
} from "@nextui-org/react";
import {useState,useEffect} from "react";
import { useApi } from "../../hooks/useApi";
import {useEther } from "../../hooks/useEther";
import * as dayjs from 'dayjs'

export default function Proposal() {
  const [form,setForm] =useState()
  const [onChain,setOnChain] = useState()
  const {postPoposal} = useApi();
  const {getAllProposal,propose} = useEther();

  useEffect(()=>{
    // async function fetch(){
    //   console.log(await getAllProposal())
    // }
    // fetch()
    console.log(onChain)
  },[onChain])

  return (
    <Container sm>
      
      <Row align="baseline">
        <Text h5>Form</Text>
      </Row>
      <Card css={{my:"$6"}}>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12}>
          <Input
          css={{width:"70%"}}
          clearable
          color="primary"
          helperText="Excelent Project Name"
          label="Projrct Name"
          placeholder="Enter Your Project Name"
          onChange={(e)=>{setForm({...form,task_id:e.target.value})}}
        />

          </Grid>
          <Grid xs={12}>
            <Textarea
              width="70%"
          color="primary"
              label="Title"
          helperText="Enter a larger title description"
              
              placeholder="Enter Your Title Description"
          onChange={(e)=>{setForm({...form,title:e.target.value})}}

            />
          </Grid>
          <Grid xs={12}>
          <Textarea
              minRows={5}

              width="70%"
          color="primary"
              label="Code"
              
          placeholder="Enter Your Description"
          onChange={(e)=>{setForm({...form,text:e.target.value})}}

          />
          </Grid>
          <Grid xs={12}>
          <Input
          css={{width:"70%"}}
          clearable
          color="primary"
          label="Link"
          placeholder="Enter Project Code Link"
          onChange={(e)=>{setForm({...form,link:e.target.value})}}

        />
          </Grid>
          <Grid xs={12}>
            <Input
            css={{mr:"$12"}}
              label="End of Proposal"
              type="date"
              color="primary"
          placeholder="Day/Month/Year"
          onChange={(e)=>{setOnChain({...onChain,_period:dayjs(e.target.value).unix()})}}

            />
            <Input
          color="primary"
          type="number"
          label="Reward"
          placeholder="100 USDC"
          onChange={(e)=>{setOnChain({...onChain,_amount:parseInt(e.target.value)})}}
        />
          </Grid>
          <Grid xs={12} >
          <Input
            css={{mr:"$12"}}
            label="Standard Auditor"
              type="number"
              color="primary"
          placeholder="0"
          onChange={(e)=>{setOnChain({...onChain,_midAuditMax:parseInt(e.target.value)})}}
            />
            <Input
          color="secondary"
          type="number"
          label="HighLevel Auditor"
          placeholder="0"
          onChange={(e)=>{setOnChain({...onChain,_highAuditMax:parseInt(e.target.value)})}}
        />
            </Grid>
            <Button shadow color="gradient" auto css={{mb:"$6"}} onPress={async ()=>{
              await postPoposal(form);
              await propose(onChain);
            }} >
          Gradient
        </Button>
        </Grid.Container>
      </Card>
      
    </Container>
  );
}
