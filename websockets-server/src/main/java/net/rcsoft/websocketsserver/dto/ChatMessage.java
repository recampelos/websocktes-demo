package net.rcsoft.websocketsserver.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatMessage {
    private ChatMessageType type;
    private String value;
    private String sender;
}
