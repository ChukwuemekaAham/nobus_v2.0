import React from 'react'
import ScriptSnippet from '../ScriptSnippet';

function Autoscaling() {

  return (
    <div id='autoscaling' className='py-10'>
      <h1 className='text-2xl md:text-3xl tracking-tight font-semibold pb-5'>
        Autoscaling Guide
      </h1>

      <div>
        <p>
          Nobus FCS Auto Scaling helps you maintain application availability and allows 
          you to automatically add or remove FCS instances according to conditions you 
          define. You can use the fleet management features of FCS Auto Scaling to maintain
          the health and availability of your fleet. You can also use the dynamic and
          predictive scaling features of FCS Auto Scaling to add or remove FCS instances.
        </p>

        <p className='py-4'>
          Dynamic scaling responds to changing demand and predictive scaling 
          automatically schedules the right number of FCS instances based on 
          predicted demand ensuring that your application always has the right 
          amount of compute, while proactively provisioning capacity. 
          Dynamic scaling and predictive scaling can be used 
          together to scale faster.
        </p>

        <div className='border-l-2 border-l-blue-500 bg-blue-100 p-2 rounded-md'>
        <span className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-blue-600">
          <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
        </svg> <span className='font-mono font-semibold text-blue-600 pl-2'>Note:</span> </span>
          <p className='text-sm pt-2 pl-2'>
          FCS Auto Scaling can scale across purchase options to optimize performance and cost.
          Nobus FCS Auto Scaling is enabled by NOBUS and carries no additional fees.
          Nobus FCS Fee and Nobus service fees apply and are billed separately.
         
          </p>
        </div>


      </div>

      <div className='pt-10'>
        <h5 className="text-3xl font-semibold text-[#232f3e]">
          FCS Autoscaling Features
        </h5>
        
        <div className='pt-5'>
          <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
          Automatically scale in and out
          </h6>
          <p>
          Launch new Nobus FCS instances seamlessly and automatically when demand increases, and terminate Nobus FCS instances not needed automatically and save money when demand subsides.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
          Choose when and how to scale
          </h6>
          <p>
          Scale dynamically based on your Nobus metrics or predictably according to a schedule that you define. Receive notifications to be alerted when you use Nobus alarms to initiate Nobus FCS Auto Scaling actions, or when FCS Auto Scaling completes an action.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
          Fleet management
          </h6>
          <p>
          Automating how your Nobus FCS fleet is managed can help maintain the availability of your applications. Nobus FCS Auto Scaling will automatically replace unhealthy or unreachable instances to maintain higher availability of your applications. To automate fleet management for FCS instances, FCS Auto Scaling monitors the health of running instances, automatically replaces impaired instances, and balances capacity across Availability Zones.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
          Predictive Scaling
          </h6>
          <p>
          Predictive Scaling, predicts future traffic, including regularly-occurring spikes, and provisions the right number of FCS instances in advance of predicted changes. Predictive Scaling’s machine learning algorithms detect changes in daily and weekly patterns, automatically adjusting their forecasts. This removes the need for manual adjustment of Auto Scaling parameters over time, making Auto Scaling simpler to configure and consume. Auto Scaling enhanced with Predictive Scaling delivers faster, simpler, and more accurate capacity provisioning resulting in lower cost and more responsive applications.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
          Support for multiple purchase models, instance types, and more
          </h6>
          <p>
          Nobus FCS Auto Scaling lets you provision and automatically scale instances across purchase options, Availability Zones (AZ), and instance families in a single application to optimize scale, performance, and cost.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
          Included with Nobus FCS
          </h6>
          <p>
          If you’re signed up for the Nobus FCS service, you’re already registered to use Nobus FCS Auto Scaling and can begin using the feature via the management dashboard.
          </p>

        </div>

      </div> 

      <div className='pt-10'>
        <h5 className="text-3xl font-semibold text-[#232f3e]">
          How FCS Autoscaling Works
        </h5>
        
        <div>
          <div className='pt-5'>
          <h5 className="text-2xl font-semibold text-[#232f3e]">Fleet Management</h5>
            <p>
            Whether you are running one Nobus FCS instance or thousands, you can use Nobus 
            FCS Auto Scaling to detect impaired Nobus FCS instances and unhealthy 
            applications, and replace the instances without your intervention. This 
            ensures that your application is getting the compute capacity that you expect.
            Nobus FCS Auto Scaling will perform three main functions to automate fleet 
            management for FCS instances:
            </p>

          </div>
          <div className='pt-5'>
            <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
            1. Monitor the health of running instances
            </h6>
            <p>
            Nobus FCS Auto Scaling ensures that your application is able to receive traffic and that FCS instances are working properly. Nobus FCS Auto Scaling periodically performs health checks to identify any instances that are unhealthy.
            </p>

          </div>
          <div className='pt-5'>
            <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
            2. Replace impaired instances automatically
            </h6>
            <p>
            When an impaired instance fails a health check, Nobus FCS Auto Scaling automatically terminates it and replaces it with a new one. That means that you don’t need to respond manually when an instance needs replacing.
            </p>

          </div>
          <div className='pt-5'>
            <h6 className="pb-5 text-xl font-semibold text-[#232f3e]">
            3. Balance capacity across Availability Zones
            </h6>
            <p>
            Nobus FCS Auto Scaling can automatically balance instances across zones, and always launches new instances so that they are balanced between zones as evenly as possible across your entire fleet.
            </p>

          </div>
        </div>

        <div className='pt-5'>
          <h6 className="pb-5 text-2xl font-semibold text-[#232f3e]">
          Scheduled Scaling
          </h6>
          <p>
          Scaling based on a schedule allows you to scale your application ahead of known load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the known traffic patterns of your web application.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-2xl font-semibold text-[#232f3e]">
          Dynamic Scaling
          </h6>
          <p>
          Nobus FCS Auto Scaling enables you to follow the demand curve for your applications closely, reducing the need to manually provision Nobus FCS capacity in advance. For example, you can use target tracking scaling policies to select a load metric for your application, such as CPU utilization. Or, you could set a target value using the new “Request Count Per Target” metric from Application Load Balancer, a load balancing option for the Elastic Load Balancing service. Nobus FCS Auto Scaling will then automatically adjust the number of FCS instances as needed to maintain your target.
          </p>

        </div>

        <div className='pt-5'>
          <h6 className="pb-5 text-2xl font-semibold text-[#232f3e]">
          Predictive Scaling
          </h6>
          <p>
          Predictive Scaling, a feature of Nobus Auto Scaling uses machine learning to schedule the right number of FCS instances in anticipation of approaching traffic changes. Predictive Scaling predicts future traffic, including regularly-occurring spikes, and provisions the right number of FCS instances in advance. Predictive Scaling’s machine learning algorithms detect changes in daily and weekly patterns, automatically adjusting their forecasts. This removes the need for manual adjustment of Auto Scaling parameters as cyclicality changes over time, making Auto Scaling simpler to configure. Auto Scaling enhanced with Predictive Scaling delivers faster, simpler, and more accurate capacity provisioning resulting in lower cost and more responsive applications.
          </p>

        </div>



      </div> 

      <div className='py-10'>
        <h5 className="text-3xl font-semibold text-[#232f3e]">
          Getting Started with FCS Autoscaling 
        </h5>
        
        <div className='pt-5'>
          <h6 className="pb-5 text-2xl font-semibold text-[#232f3e]">
          Step 1: Sign into the Nobus Management Dashboard
          </h6>
          <p>
           Sign into the <a className='hover:underline'>management dashboard</a> and click on the cloud config panel button.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-2xl font-semibold text-[#232f3e]">
          Step 2: Create an Nobus FCS Auto Scaling group
          </h6>
          <p>
          Go through the ochestration tab, using the Nobus FCS Auto Scaling stack, create the launch configuration, specifying a name, NMI, instance type, and other details.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-2xl font-semibold text-[#232f3e]">
          Step 3: Configure your Nobus FCS Auto Scaling group
          </h6>
          <p>
          Specify a name, size, and network for your Nobus FCS Auto Scaling group.
          </p>

        </div>
        <div className='pt-5'>
          <h6 className="pb-5 text-2xl font-semibold text-[#232f3e]">
          Step 5: Configure Scaling Policies (Optional)
          </h6>
          <p>
          You can also configure scaling policies for your Nobus FCS Auto Scaling group.
          </p>

        </div>
        

      </div> 
    
    </div>
   
           
  )
}

export default Autoscaling