# Observations for the UI Design Team Meeting
 
## File Management
- Make sure the final version uploaded to SharePoint matches the version in Salesforce. 
**Sounds like this is referring to the screenshot in Salesforce. The design team should already be updating this screenshot each time there is an edit**
- Update XD files when "unretouch" content arrives and notify when files are modified I am unclear as to what this means
- Include subpage images in the XD file to improve compression and retrieval
-Like this added in the assets folder if not in the XD file (client folder in sharepoint) If I am understanding this correctly, the ask here is to basically crop any sort of provided images from the client for secondary pages and provide them in the main XD file. I don’t think this is an unreasonable request, however, since we don’t have visibility at the design step as to what that secondary page will look like, It’s hard for us to understand what size it needs to be included in.
 
## Text and Typography
- Avoid inner shadows on text (use outer shadows if needed) 
This request makes sense. I believe this was an issue in the past that we agreed we wouldn’t do due to CSS limitations
- Consider text length (use content libraries when appropriate) 
I agree if there is a section that is super dependent on the length of the text, we should be checking text length, but it is unclear to the team where that text exactly is coming from. Also, it could be taxing and increase turn around times If we need to search the library every time there is text that is going to be added. I think some general assumptions about filler text for sections is needed. Example – Welcome text is generally 2 paragraphs, and CTA filler text should be 1-2 sentences
- Check text grammar 
Designer should be doing this for each design
- Specify which icon library is used 
**This seems a little redundant as the properties panel in XD should be able to provide that information (even for the Font icons). I feel this ask adds unnecessary effort on behalf of the designers**
-Do we need another new icon library? (https://a2.nd-cdn.us/Skinning/icons/icons-reference.html) 
**Yea, maybe. That would be cool to grow our icon library**
 
## Images and Graphics
- Images with irregular shapes should not include movement or zoom OK
- Include the corresponding color layer in images As long as the layers are structured appropriately, and built out in XD, the Designers should already be doing this.
- Check image cropping before uploading mockups Designers should be doing this each time they design a site
- For CTAs, create masks with the desired shape to properly separate the image Designers should be doing this each time they design a site
 
 
## Layer Management
- Apply transparency directly to each image (not as floating elements) – Makes sense – sounds like this will help build things out better within the constraints of HTML/CSS
- Design overlapping effects considering that backgrounds should be in a back layer Makes sense – sounds like this will help build things out better within the constraints of HTML/CSS
- Check proper layer alignment and size Designer should be doing this with each site
 
## Responsive Design
- Avoid overlapping geometric shapes (not good for responsive format) We should comply with this unless there is a request or it is something that will elevate the overall design of the site
- Create components that adapt well to responsive design
- Avoid excessive background and polygon overlays (affects accessibility) We should comply with this unless it is absolutely necessary. If thisa is the case, Designer should inquire with builder. Builder can supply an alternative structure so Design effect/aesthetic can still be acheived
 
## Workflow
- Check the Design Survey for elements like tires, coupons, and financing Not sure what this means
- Verify that mobile versions download correctly Not sure what this mean – we don’t design mobile versions
- Consider implementation time when designing complex animations
- Reach out if you want to try a new design and want to get an idea of how long it would take build to create. Yes – communication is key! This will be part of our ongoing Custom Component project. Design should not be including elements that include custom development/interactions to their designs. If the Designer wants to include something, we will add it as part of our Custom Component library project so we can work with build to frontload the dev time so implementation is easier.

