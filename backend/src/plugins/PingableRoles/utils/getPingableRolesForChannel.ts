import { GuildPluginData } from "knub";
import { PingableRole } from "../../../data/entities/PingableRole.js";
import { PingableRolesPluginType } from "../types.js";

export async function getPingableRolesForChannel(
  pluginData: GuildPluginData<PingableRolesPluginType>,
  channelId: string,
): Promise<PingableRole[]> {
  if (!pluginData.state.cache.has(channelId)) {
    pluginData.state.cache.set(channelId, await pluginData.state.pingableRoles.getForChannel(channelId));
  }

  return pluginData.state.cache.get(channelId)!;
}
