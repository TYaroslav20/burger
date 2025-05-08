import { FC } from "react";
import { 
    ContainerBox,
    SectionDownload,
    DownloadText,
    StyledButton
 } from "./Style";
export const Download: FC = () => {
  return (
    <>
    <SectionDownload>
    <ContainerBox>
        <DownloadText>Download Our Menu</DownloadText>
        <StyledButton>DOWNLOAD</StyledButton>
    </ContainerBox>
    </SectionDownload>
    </>
  );
}