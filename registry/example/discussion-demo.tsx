import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Discussion,
  DiscussionItem,
  DiscussionContent,
  DiscussionReplies,
  DiscussionTitle,
  DiscussionBody,
  DiscussionExpand,
} from "@/registry/molecule-ui/discussion";

export function CommentTreeDemo() {
  return (
    <div className="w-full md:w-3/4">
      <ScrollArea className="max-h-[400px] overflow-auto">
        <Discussion
          defaultValue={["item-1"]}
          type="multiple"
          className="w-full"
        >
          <DiscussionItem value="item-1">
            <DiscussionContent className="gap-2">
              <div>
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                  <AvatarFallback>MUI</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <DiscussionTitle className="flex gap-2 items-center">
                    <div>Jane Smith</div>
                    <div className="text-muted-foreground text-xs ">
                      @janesmith
                    </div>
                    <span className="text-muted-foreground text-xs">•</span>
                    <div className="text-muted-foreground text-xs ">
                      1 hour ago
                    </div>
                  </DiscussionTitle>
                  <DiscussionBody>
                    This is a great article! Thanks for sharing your insights. I
                    particularly enjoyed the section about accessibility best
                    practices.
                  </DiscussionBody>
                </div>
                <DiscussionExpand />
              </div>
            </DiscussionContent>
            <DiscussionReplies>
              <DiscussionItem value="item-1.1">
                <DiscussionContent className="gap-2">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://randomuser.me/api/portraits/men/22.jpg" />
                      <AvatarFallback>MUI</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <DiscussionTitle className="flex gap-2 items-center">
                        <div>Liam Patel</div>
                        <div className="text-muted-foreground text-xs ">
                          @liampatel
                        </div>
                        <span className="text-muted-foreground text-xs">•</span>
                        <div className="text-muted-foreground text-xs ">
                          34 minutes ago
                        </div>
                      </DiscussionTitle>
                      <DiscussionBody>
                        I agree! The examples were particularly helpful. Do you
                        have any recommendations for further reading?
                      </DiscussionBody>
                    </div>
                    <DiscussionExpand />
                  </div>
                </DiscussionContent>
                <DiscussionReplies>
                  <DiscussionItem value="item-1.1.1">
                    <DiscussionContent className="gap-2">
                      <div>
                        <Avatar>
                          <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" />
                          <AvatarFallback>MUI</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <DiscussionTitle className="flex gap-2 items-center">
                            <div>Alex Chen</div>
                            <div className="text-muted-foreground text-xs ">
                              @alexchen
                            </div>
                            <span className="text-muted-foreground text-xs">
                              •
                            </span>
                            <div className="text-muted-foreground text-xs ">
                              26 minutes ago
                            </div>
                          </DiscussionTitle>
                          <DiscussionBody>
                            Check out the MDN docs on ARIA - they're
                            comprehensive and well-maintained.
                          </DiscussionBody>
                        </div>
                      </div>
                    </DiscussionContent>
                  </DiscussionItem>
                </DiscussionReplies>
              </DiscussionItem>
              <DiscussionItem value="item-1.2">
                <DiscussionContent className="gap-2">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://randomuser.me/api/portraits/women/32.jpg" />
                      <AvatarFallback>MUI</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <DiscussionTitle className="flex gap-2 items-center">
                        <div>Sarah Wilson</div>
                        <div className="text-muted-foreground text-xs ">
                          @sarahwilson
                        </div>
                        <span className="text-muted-foreground text-xs">•</span>
                        <div className="text-muted-foreground text-xs ">
                          14 minutes ago
                        </div>
                      </DiscussionTitle>
                      <DiscussionBody>
                        Thanks for the detailed explanation! This will
                        definitely help with my current project.
                      </DiscussionBody>
                    </div>
                  </div>
                </DiscussionContent>
              </DiscussionItem>
            </DiscussionReplies>
          </DiscussionItem>
        </Discussion>
      </ScrollArea>
    </div>
  );
}
