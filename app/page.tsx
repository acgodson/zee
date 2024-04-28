'use client';
import ZeeProfileBoard from '@/library/components/organisms/ZeeProfileBoard';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/library/components/organisms/Resizable';
import TokenBoard from '@/library/components/organisms/TokenBoard';
import TokenBoardAnalytics from '@/library/components/organisms/TokenBoardAnalytics';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const page = () => {
  const toast = useToast();
  // useEffect(() => {
  //   toast({
  //     title: 'mounted',
  //     status: 'success',
  //     position: 'top-right',
  //   });
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-16 p-0 flex-1 overflow-scroll">
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={35}>
          <ZeeProfileBoard />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={65}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={30}>
              <TokenBoardAnalytics />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={70}>
              <TokenBoard />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default page;
