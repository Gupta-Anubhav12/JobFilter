import Head from 'next/head'
import { Header,JobCard } from '../components'
import {jobs} from '../data/jobs'
import { useEffect, useState } from "react";
import {DataContext} from '../utils/DataContext'
import styled from "styled-components";


const JobWrapper = styled.div`
  display:block;
  margin-top:25px;
  
`

export default function Home() {
  const [jobMap,setJobMap] = useState()
  const [options,setOptions] = useState()
  const [selected,setSelected] = useState([])
  const [displayJobs,setDisplayJobs] = useState([])

  useEffect(() =>{
    let hashMap = new Map()
  
    for(let i=0;i<jobs.length;i++) {

      for(let j = 0;j<jobs[i]['tags'].length;j++)
      {
        if(hashMap.get(jobs[i]['tags'][j])==undefined)
        {
          let list = []
          list.push(jobs[i]['id'])
          hashMap.set(jobs[i]['tags'][j],list);
         
        }
        else{
          let list = hashMap.get(jobs[i]['tags'][j]);
          list.push(jobs[i]['id']);
           hashMap.set(jobs[i]['tags'][j],list);
        }
    }
    }
    let keys = [...hashMap.keys()];
    let tagOptions = []
    for(let i=0; i<keys.length; i++) {
      let data = {
        "value":keys[i],
        "label":keys[i]
      }
      tagOptions.push(data);
    }
    setOptions(tagOptions);
    setJobMap(hashMap);
  },[]);
 
  useEffect(()=>{
    let jobArray = [];
    let finalJobsIds = new Set;
    // console.log(selected)
    for(let i=0;i<selected.length;i++)
    {
      let tag = selected[i].value;

      let jobs=jobMap.get(tag)
      jobs.forEach(job=>{
        finalJobsIds.add(job)
      });

    }
    jobs.forEach(job=>{
      if(finalJobsIds.has(job.id))
      {
        jobArray.push(job);
      }
    })
    console.log(jobArray)
    setDisplayJobs(jobArray)
  },[selected,jobMap])  

  return (
   
    <>
    <DataContext.Provider value={[options,selected,setSelected]}>
        <Header> </Header>
    </DataContext.Provider>
    <JobWrapper>
    {
      displayJobs.map((job) =>{
        return(
          <JobCard jobData={job} key={job.id}></JobCard>
        )
      })
    }
   
    </JobWrapper>

     </>
  )
}
