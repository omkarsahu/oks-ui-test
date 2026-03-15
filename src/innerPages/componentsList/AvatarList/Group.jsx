import React from "react";
import { ShowCode } from "../../../components";
import { Avatar, AvatarGroup } from "oks-ui";

const preview = (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3 flex-wrap">
      <AvatarGroup>
        <Avatar src="https://i.pravatar.cc/150?img=5" />
        <Avatar src="https://i.pravatar.cc/150?img=6" />
        <Avatar src="https://i.pravatar.cc/150?img=7" />
      </AvatarGroup>

      <AvatarGroup max={3} total={8}>
        <Avatar src="https://i.pravatar.cc/150?img=8" />
        <Avatar src="https://i.pravatar.cc/150?img=9" />
        <Avatar src="https://i.pravatar.cc/150?img=10" />
        <Avatar src="https://i.pravatar.cc/150?img=11" />
        <Avatar src="https://i.pravatar.cc/150?img=12" />
      </AvatarGroup>

      <AvatarGroup max={2} total={5} renderCount={(count) => `+${count} more`}>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
        <Avatar name="D" />
      </AvatarGroup>
    </div>

    <div className="flex items-center gap-3 flex-wrap">
      <AvatarGroup isGrid>
        <Avatar src="https://i.pravatar.cc/150?img=13" />
        <Avatar src="https://i.pravatar.cc/150?img=14" />
        <Avatar src="https://i.pravatar.cc/150?img=15" />
        <Avatar src="https://i.pravatar.cc/150?img=16" />
        <Avatar src="https://i.pravatar.cc/150?img=17" />
        <Avatar src="https://i.pravatar.cc/150?img=18" />
      </AvatarGroup>
    </div>

    <div className="flex items-center gap-3 flex-wrap">
      <AvatarGroup size="sm" radius="md" color="success" isBordered>
        <Avatar name="Group" />
        <Avatar name="Styles" />
        <Avatar name="Override" color="danger" />
        <Avatar name="Own radius" radius="full" />
      </AvatarGroup>

      <AvatarGroup isDisabled size="sm" color="secondary">
        <Avatar name="Disabled" />
        <Avatar name="Group" />
        <Avatar name="Avatars" />
      </AvatarGroup>
    </div>
  </div>
);

const code = `import { Avatar, AvatarGroup } from "oks-ui";

<AvatarGroup>
  <Avatar src="https://i.pravatar.cc/150?img=5" />
  <Avatar src="https://i.pravatar.cc/150?img=6" />
  <Avatar src="https://i.pravatar.cc/150?img=7" />
</AvatarGroup>

<AvatarGroup max={3} total={8}>
  <Avatar src="https://i.pravatar.cc/150?img=8" />
  <Avatar src="https://i.pravatar.cc/150?img=9" />
  <Avatar src="https://i.pravatar.cc/150?img=10" />
  <Avatar src="https://i.pravatar.cc/150?img=11" />
  <Avatar src="https://i.pravatar.cc/150?img=12" />
</AvatarGroup>

<AvatarGroup max={2} total={5} renderCount={(count) => \`+\${count} more\`}>
  <Avatar name="A" />
  <Avatar name="B" />
  <Avatar name="C" />
  <Avatar name="D" />
</AvatarGroup>

<AvatarGroup isGrid>
  <Avatar src="https://i.pravatar.cc/150?img=13" />
  <Avatar src="https://i.pravatar.cc/150?img=14" />
  <Avatar src="https://i.pravatar.cc/150?img=15" />
  <Avatar src="https://i.pravatar.cc/150?img=16" />
  <Avatar src="https://i.pravatar.cc/150?img=17" />
  <Avatar src="https://i.pravatar.cc/150?img=18" />
</AvatarGroup>

<AvatarGroup size="sm" radius="md" color="success" isBordered>
  <Avatar name="Group" />
  <Avatar name="Styles" />
  <Avatar name="Override" color="danger" />
  <Avatar name="Own radius" radius="full" />
</AvatarGroup>

<AvatarGroup isDisabled size="sm" color="secondary">
  <Avatar name="Disabled" />
  <Avatar name="Group" />
  <Avatar name="Avatars" />
</AvatarGroup>`;

const Group = () => {
  return <ShowCode title="AvatarGroup" preview={preview} code={code} />;
};

export default Group;
